import { Dispatch } from 'react';
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react';

type NavBarProps = {
  setIsFormOpen: Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBar({ setIsFormOpen }: NavBarProps) {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <MenuItem header>
          <img src='/logo.png' alt='logo' />
          Re-vents
        </MenuItem>
        <MenuItem name='Events' />
        <MenuItem>
          <Button
            onClick={() => setIsFormOpen(true)}
            floated='right'
            positive
            inverted
            content='Create event'
          />
        </MenuItem>
        <MenuItem position='right'>
          <Button basic inverted content='Login' />
          <Button
            basic
            inverted
            content='Register'
            style={{ marginLeft: '0.5rem' }}
          />
        </MenuItem>
      </Container>
    </Menu>
  );
}
