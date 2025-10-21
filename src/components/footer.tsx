import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link href={"/parfums"} className="link link-hover">Parfums</Link>
                    <Link href={"/accessoires"} className="link link-hover">Accessoires</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Notre entreprise</h6>
                    <Link href={"/about"} className="link link-hover">À propos</Link>
                    <Link href={"/contact"} className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Légal</h6>
                    <Link href={"/terms"} className="link link-hover">Conditions d'utilisation</Link>
                    <Link href={"/privacy"} className="link link-hover">Politique de confidentialité</Link>
                    <Link href={"/cookies"} className="link link-hover">Politique de cookies</Link>
                </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="#fff" width="495.69" height="329.9" viewBox="0 0 495.69 329.9"><g id="Layer_1-2"><path d="M165.8,164.95c39.07,12.46,72.43,30.27,99.12,53.73v-114.43c-27.14,26.73-59.83,46.21-99.12,60.71Z" /><path d="M330.74,329.9c9.24-26.01,20.94-49.48,34.81-70.15h-64.66c13.58,20.51,23.65,43.86,29.85,70.15Z" /><path d="M495.69,164.95c-42.93-16.89-77.92-38.36-105.05-64.57h-90.86v47.73h90.42v31.42h-90.82v49.72h90.08c29.19-31.83,65.1-53.88,106.23-64.3Z" /><path d="M330.74,0c-10.54,26.83-22.8,50.03-37,70.15h70.61c-15.13-20.95-26.33-44.3-33.61-70.15Z" /><path d="M87.9,148.38h-29.7c-15.38,0-23.07-7.07-23.07-21.21,0-18.56,15.91-27.84,47.73-27.84,21.21,0,41.32,3.54,60.33,10.61v-31.82c-19-6.19-39.11-9.28-60.33-9.28C27.62,68.83,0,88.27,0,127.16c0,35.36,19.4,53.03,58.2,53.03h29.7c17.85,0,26.78,7.07,26.78,21.21,0,19.45-14.54,29.17-43.62,29.17-23.95,0-45.43-3.53-64.44-10.61v31.82c19,6.19,40.48,9.28,64.44,9.28,52.5,0,78.76-19.89,78.76-59.66,0-35.36-20.64-53.03-61.92-53.03Z" /></g></svg>
                    <p>
                        SENZA Co.
                        <br />
                        Redéfinir l’élégance à travers le parfum.
                    </p>
                </aside>
                <nav className="flex flex-row items-center gap-4 w-full">
                    <span className="flex-1">Copyright &copy; 2025 SENZA Co.</span>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </footer>
        </footer>
    );
}