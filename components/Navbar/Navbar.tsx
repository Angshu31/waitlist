import Image from "next/image"
import Link from "next/link"
import styles from "./Navbar.module.css"
export default function Navbar(){
    return (
        <div className={styles.nav}>
            <div style={{paddingLeft: "20px"}}>
            <Image src="/assets/logo.svg" width="60em" height="60em"></Image>
            </div>
            <div style={{paddingRight: "20px", display: "flex"}}>
            <div style={{margin: "10px", cursor: "pointer"}}>
                    <Link href='https://github.com/voltpkg'>
                        <Image src="/assets/github.svg" width="40em" height="40em"></Image>
                    </Link>
                </div>
                <div style={{margin: "10px", cursor: "pointer"}}>
                    <Link href='https://discord.gg/KjzEwzXe7Z'  >
                        <Image src="/assets/discord.svg" width="40em" height="40em"></Image>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}