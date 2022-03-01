import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { shallow  } from 'enzyme';
import { Button } from "@material-ui/core";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import axios from 'axios';

import RandomBooks from '../RandomBooks';

Enzyme.configure({ adapter: new Adapter() });

test('Renderizza il componente Random Books', () => {
    render(<RandomBooks />);

    //Verifica se il container generale viene renderizzato
    const app = screen.getByTestId('container-random-books');
    expect(app).toBeInTheDocument();
});


describe('Test funzione sul button random', () => {
    it('Test click', () => {
        const mockCallBack = jest.fn();

        //simula il click alla funzione
        const button = shallow((<Button onClick={mockCallBack} variant="contained">Genera un libro</Button>));
        button.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});


jest.mock("axios");

//testo la risposta
test("good response", () => {
    axios.get.mockImplementation(() => Promise.resolve({  status: 200, data: res.data.results }));
});

//faccio un valore mockato
const toneBooks = [{
    "title": "#ASKGARYVEE",
    "description": "The entrepreneur expands on subjects addressed on his Internet show, like marketing, management and social media.",
    "author": "Gary Vaynerchuk",
    "publisher": "HarperCollins",
}];

describe("getBooks", () => {
    describe("Quando la chiamata va in success", () => {
      it("dovrebbe tornare la lista di libri", async () => {
    
        axios.get.mockResolvedValue({ data: toneBooks });
        render(<RandomBooks />);
  
        const bookList = await waitFor(() => screen.findAllByTestId('container-random-books'));
        expect(bookList).toHaveLength(1);
      });
    });

});