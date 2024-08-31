function Sign() {
    const h2Style = {
      color: 'red',  // CSS values should be strings
      display: 'inline'  // CSS values should be strings
    };
  
    const linkStyle = {
      textDecoration: 'none',  // camelCase for CSS properties
      color: '#007bff',  // CSS values should be strings
      fontWeight: 'bold'  // camelCase for CSS properties
    };
  
    return (
      <>
        <div id="sign" className="text-light mt-2">
        <p className="h5">
          Designed By{'  '}
          <a className="link" style={linkStyle} target="_blank" rel="noopener noreferrer" href="https://arun-showcase.web.app/">
            Arun
          </a>
          <span style={h2Style}>&#10084;</span> {/* Changed h2 to span for inline styling */}
        </p>
        </div>
      </>
    );
  }
  
  export default Sign;
  