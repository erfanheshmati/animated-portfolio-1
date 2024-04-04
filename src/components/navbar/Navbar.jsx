import "./navbar.scss"

export default function Navbar() {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>Erfan Dev</span>
                <div className="social">
                    <a href=""><img src="/facebook.png" alt="" /></a>
                    <a href=""><img src="/instagram.png" alt="" /></a>
                    <a href=""><img src="/youtube.png" alt="" /></a>
                    <a href=""><img src="/dribbble.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}
