import Image from "next/image";

export default function Comment({avatar, author, date, comment}) {
    return (
        <div className="mt-5">
            <div className="flex gap-3 items-center">
                <div className="relative overflow-hidden w-[35px] h-[35px] bg-light dark:bg-dark rounded-full">
                    <Image src={avatar} fill className="object-cover"/>
                </div>
                <div>
                    <h5 className="text-dark dark:text-light text-sm">{author}</h5>
                    <p className="text-sm text-dark-gray dark:text-gray">{date}</p>
                </div>
            </div>
            <p className="mt-2 text-sm">{comment}</p>
        </div>
    );
}