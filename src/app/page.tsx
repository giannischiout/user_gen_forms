import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ElementContainer} from "@/app/_components/FormItem";
import {ChooseItemDialog} from "@/app/_components/ChooseItemDialog";
export default function Home() {
  return (
        <section className="create_new_container">
            <form className="create_new_form">
                <ElementContainer />
            </form>
        </section>
    );
}



