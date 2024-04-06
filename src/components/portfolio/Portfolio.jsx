import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://i.ytimg.com/vi/jbfuzcrfjqQ/maxresdefault.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum."
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: "https://jstemplate.net/_next/image?url=https%3A%2F%2Fwp.jstemplate.net%2Fwp-content%2Fuploads%2F2022%2F06%2Fdarkthumbs.png&w=1920&q=75",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum."
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://i.ytimg.com/vi/enVzihS5cis/maxresdefault.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum."
    },
    {
        id: 4,
        title: "Music App",
        img: "https://play-lh.googleusercontent.com/YNqQIQ7tr12CBrPoK8Qt1aVch2UEpo0BCwK_9zJImbM3nZGPLVZPZq2ekjPj3rvo3w=w526-h296-rw",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum."
    },
]

const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section id="Works">
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default function Portfolio() {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{ scaleX }}></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}
