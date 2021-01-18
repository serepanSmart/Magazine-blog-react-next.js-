import Link from 'next/link';


const LinkElement = ({href, target, className, }) => {
    return (
    <Link href={href}><a className={className}>{target}</a></Link>
    );
  };

export default LinkElement;