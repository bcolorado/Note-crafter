import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export const InfoTooltip = () => {
  return (
    <OverlayTrigger
      delay={{ hide: 450, show: 300 }}
      overlay={(props) => (
        <Tooltip {...props}>Notes can support markdown on its content 😉</Tooltip>
      )}
      placement='bottom'
    >
      <Button variant='outline-danger'>?</Button>
    </OverlayTrigger>
  );
};
