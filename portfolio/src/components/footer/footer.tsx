
function Footer() {
    return (
        <footer className="ml-5 md:ml-0">
            <p className="text-sm text-blue-300 font-mono md:ml-28 mt-20 pb-5">This page was created in Visual Studio Code with{'\u00A0'}
            <a className="text-blue-100 hover:underline" href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            ReactTS
            </a>
            , <a className="text-blue-100 hover:underline" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind</a> +{'\u00A0'}
            <a className="text-blue-100 hover:underline" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">Vanilla CSS</a>, 
            and <a className="text-blue-100 hover:underline" href="https://mui.com/" target="_blank" rel="noopener noreferrer">Material UI</a>.</p>
        </footer>
    )
}

export default Footer;