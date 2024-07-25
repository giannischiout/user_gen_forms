import styles from "./styles/styles.module.css";
import {Sidebar} from "./sidebar";
import {DropArea} from "./dropArea";
import {DragProvider} from "@/app/_content/dragContext";

export default function CreateFormPage() {
    return (
        <DragProvider>
            <section className={styles.container}>
                <Sidebar/>
                <DropArea/>
                <div className={styles.sidebar_container}>
                    <div>
                    </div>
                </div>
            </section>
        </DragProvider>
    )
}