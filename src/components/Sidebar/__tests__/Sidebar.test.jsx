import '@testing-library/jest-dom';
import { SideBar } from '..';
import { render, screen } from '@testing-library/react';

describe('<Sidebar />', () => {
  it('should be on the document', function () {
    render(<SideBar />);

    const sidebar = screen.getByTestId('sidebar');

    expect(sidebar).toBeInTheDocument();
  });
});
