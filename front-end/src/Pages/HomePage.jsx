function HomePage() {
    return (
        <>
            <div id="contain-head">
                <header className='head-title'>Kudos Board</header>
            </div>
            <main>
                <Menu></Menu>
                <AllBoards></AllBoards>
            </main>
            <footer id="footer-info">© 2024 Kudos Board : Michelle Ordonez</footer>
        </>
    )
}

export default HomePage
