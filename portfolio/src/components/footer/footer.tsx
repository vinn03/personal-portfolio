function Footer() {
  return (
    <footer className="">
      <p className="text-sm text-blue-300 font-mono mt-20">
        This{" "}
        <a
          className="text-blue-100 hover:underline"
          href="https://github.com/vinn03/personal-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          page
        </a>{" "}
        was created in Visual Studio Code with{"\u00A0"}
        <a
          className="text-blue-100 hover:underline"
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactTS
        </a>
        ,{" "}
        <a
          className="text-blue-100 hover:underline"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind
        </a>{" "}
        +{"\u00A0"}
        <a
          className="text-blue-100 hover:underline"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vanilla CSS
        </a>
        , and{" "}
        <a
          className="text-blue-100 hover:underline"
          href="https://mui.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Material UI
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
