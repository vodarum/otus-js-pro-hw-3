export default function addMarkup() {
  document.body.innerHTML = `<header>
                                <nav class="menu menu_h">
                                    <ul class="menu__list">
                                        <li class="menu__item"><a href="#" class="menu__link"></a></li>
                                        <li class="menu__item"><a href="#" class="menu__link"></a></li>
                                        <li class="menu__item"><a href="#" class="menu__link"></a></li>
                                    </ul>
                                </nav>
                            </header>
                            <main>
                                <section class="section" id="section-1">
                                    <h1 class="section__title"></h1>
                            
                                    <div class="section__content"></div>
                                </section>
                            
                                <section class="section">
                                    <h1 class="section__title"></h1>
                            
                                    <div class="section__content"></div>
                                </section>
                            </main>
                            <footer>
                                <nav class="menu menu_f">
                                    <ul class="menu__list">
                                        <li class="menu__item"><a href="#" class="menu__link"></a></li>
                                        <li class="menu__item"><a href="#" class="menu__link"></a></li>
                                        <li class="menu__item"><a href="#" class="menu__link"></a></li>
                                    </ul>
                                </nav>
                            </footer>`;
}
