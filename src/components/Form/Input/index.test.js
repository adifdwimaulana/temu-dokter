import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from './index';

const setup = () => {
    const utils = render(<Input placeholder="Masukkan Username" />)
    const input = utils.getByPlaceholderText("Masukkan Username")

    return {
        ...input,
    }
}

test("Form should not allow letters to be inputted", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'adifdwimaulana' } })
    expect(input.value).toBe('adifdwimaulana')
})