import styles from "./styles.module.css"
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

export const Layout = ({children}) => {
    return (
        <div className={styles.root}>
            <Header className={styles.header}/>
            <div className={styles.content}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
    )
}