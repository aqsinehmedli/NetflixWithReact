import { motion, AnimatePresence } from "framer-motion";
const FAQItem = ({ item, openAccordion, setOpenAccordion }) => {
    return (
        <button onClick={() => {
            setOpenAccordion(prevState => prevState !== item.id ? item.id : null)
        }} className='h-full bg-[#2D2D2D]'>
            <div className='flex h-[84px] items-center justify-between py-[28px] px-[24px] hover:bg-[#404040] transition 0.5s duration-250 ease-in-out'>
                <h3 className='text-[24px] text-start ml-[24px] font-semibold text-white pr-[100px]'>{item.title}</h3>
                <svg className={`size-[36px] ${openAccordion === item.id ? "rotate-45" : "rotate-0"} mr-[24px]`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>

            </div>
            <AnimatePresence initial={false}>
                {openAccordion === item.id && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: {height: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className={`border-t-[1px] border-black pt-10`}>
                            <p className='text-[24px] text-start mb-[25px] ml-[24px] font-semibold text-white pr-[100px]'>
                                {item.desc}
                            </p>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

        </button>
    )
}

export default FAQItem