import { FaFileAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

export default function Card({ data ,referance}) {
  return (
    <>
      <motion.div drag dragConstraints={referance} whileDrag={{scale : 1.1}} dragTransition={{bounceDamping : 5 ,bounceStiffness : 50}} dragElastic={0.2} className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-7 py-10 overflow-hidden">
        <FaFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">
          {data.description}
        </p>
        <div className="footer absolute bottom-0 w-full left-0 ">
          <div className="flex justify-between items-center px-8 mb-5">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 py-3 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoIosClose />
              ) : (
                <FaCloudDownloadAlt size={".7em"} color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`w-full py-3 ${data.tag.tagColor == 'blue' ? 'bg-blue-600' : 'bg-green-600'} flex justify-center items-center`}
            >
            <Link to={data.link}><h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3></Link>
            </div>
          )}
        </div>
      </motion.div>
      </>
  );
}
