import { useRef } from "react"
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

export default function Services() {
    const ref = useRef()

    const isInView = useInView(ref, { margin: "-100px" })

    return (
        <motion.div className="services" variants={variants} initial="initial" animate={isInView && "animate"} ref={ref}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand
                    <br />and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.
                    </h1>
                    <button>What We Do?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus veritatis aliquid vitae cum similique ipsa doloremque ullam voluptatibus, ab est quibusdam iste, ad facilis recusandae ut id eaque odio.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus veritatis aliquid vitae cum similique ipsa doloremque ullam voluptatibus, ab est quibusdam iste, ad facilis recusandae ut id eaque odio.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus veritatis aliquid vitae cum similique ipsa doloremque ullam voluptatibus, ab est quibusdam iste, ad facilis recusandae ut id eaque odio.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, delectus veritatis aliquid vitae cum similique ipsa doloremque ullam voluptatibus, ab est quibusdam iste, ad facilis recusandae ut id eaque odio.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
