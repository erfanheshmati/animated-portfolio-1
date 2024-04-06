import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://media.istockphoto.com/id/488062846/photo/old-car-off-road.webp?s=170667a&w=0&k=20&c=4DDdCP1bwCCiYz8nz2xAiqeWjnXz2giTVoL6x5AqrP4=",
        desc: "lorem ipsum dolor sit amet, consectetur adip."
    },
    {
        id: 2,
        title: "Node Commerce",
        img: "https://media.istockphoto.com/id/2073398927/photo/rusty-old-suv-with-loaded-logs-in-the-cabin-among-a-forest-road.webp?s=170667a&w=0&k=20&c=-PuBXqMkyGOdxbZ9JwRmGRt4SH96W_A3rcvm87_GJnc=",
        desc: "lorem ipsum dolor sit amet, consectetur adip."
    },
    {
        id: 3,
        title: "Next Commerce",
        img: "https://media.istockphoto.com/id/1314843340/photo/closeup-photo-of-off-road-car-in-mountains.webp?s=170667a&w=0&k=20&c=nbeiQkAl0sjXtzGz-mbIncGW3Z4yiZ3FDMuycTMSpZI=",
        desc: "lorem ipsum dolor sit amet, consectetur adip."
    },
    {
        id: 4,
        title: "Tailwind Commerce",
        img: "https://images.unsplash.com/photo-1712246404769-132b7d49d235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        desc: "lorem ipsum dolor sit amet, consectetur adip."
    },
]

const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section>
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
