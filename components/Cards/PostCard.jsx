import Image from "next/image";
import Link from "next/link";

import "@/styles/card.scss";

const loader = ({ src }) => {
  return process.env.NEXT_PUBLIC_DIRECTUS_ASSETS + src;
};

export default function PostCard(props) {
  return (
    <div key={props.id} className="card">
      <Link href={`/post/${props.id}`} className="cover">
        {props.cover ? (
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            sizes="100vw"
            src={props.cover}
            loader={loader}
            alt={props.title}
          />
        ) : (
          ""
        )}
      </Link>
      <div className="p-5">
        <Link href={`/post/${props.id}`}>
          <h3 className="title">{props.title}</h3>
        </Link>

        <p className="description">{props.desc}</p>
      </div>
    </div>
  );
}
