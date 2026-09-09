interface props {
  title?: string;
  children: React.ReactNode;
  style?: string;
}
export const GamePageCard = ({ children, title, style }: props) => {
  return (
    <dl className={`mt-2 px-4 ${style}`}>
      <dt className="dark:text-white mb-2 font-extrabold text-['16px']">
        {title}
      </dt>
      <dd>{children}</dd>
    </dl>
  );
};
