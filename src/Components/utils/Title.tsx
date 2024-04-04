import { Image, Stack } from "react-bootstrap";
import logo from '../../assets/logo.svg';
import '../../Styles/TitleStyle.css'

type TitleProps = {
  title: string;
};

export const Title = ({title}:TitleProps) => {
  return (
    <Stack direction='horizontal' gap={4} className="logo-image">
      <Image
        src={logo}
        alt='logo'
        width='120'
        roundedCircle
        className='shadow-sm'
        style={{ backgroundColor: 'white' }}
      />

      <h1>{title}</h1>
    </Stack>
  );
};
