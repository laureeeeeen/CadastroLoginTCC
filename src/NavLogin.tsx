import LogoLogin from './assets/LogoLogin.png'


function Navbar() {
  return (
<>
        <nav style={{
          display: "flex", justifyContent: "center",
          marginTop: "35px"
        }}>
        <div style={{ minWidth: 0,}}>
          <img
            src={LogoLogin}
            alt="Logo"
            style={{
              width: "24vw",
              height: "6.8vw",
            }}
          />
        </div>
        </nav>
        </>
  );
}

export default Navbar;