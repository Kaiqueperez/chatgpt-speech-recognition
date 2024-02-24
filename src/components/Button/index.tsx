import './styles.css';

type ButtonStyle = 'start' | 'stop' | 'gpt';
type ButtonProps = React.ComponentProps<'button'> & {
  text: string;
  buttonstyle: ButtonStyle;
};

export const Button = ({ ...props }: ButtonProps) => {
  const { text, buttonstyle } = props;
  return (
    <button className={`button-${buttonstyle}`} {...props}>
      {text}
    </button>
  );
};
