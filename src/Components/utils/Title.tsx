import { Image, Stack } from "react-bootstrap";
import logo from '../../assets/logo.svg';

type TitleProps = {
  title: string;
};

export const Title = ({title}:TitleProps) => {
  return (
    <Stack direction='horizontal' gap={4}>
      <Image
        src={logo}
        alt='logo'
        width='120'
        roundedCircle
        className='shadow-sm mb-2'
        style={{ backgroundColor: 'white' }}
      />

      <h1>{title}</h1>
    </Stack>
  );
};
