const { render, screen } = require("@testing-library/react")
import Contact from '../Contact'
import "@testing-library/jest-dom"

// test("should load contact us page", () => {

//     render(<Contact/>);
//     const heading = screen.getAllByRole("heading");

//     expect(heading).toBeInTheDocument();
// })

test("should load contact us page", () => {

    render(<Contact/>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})