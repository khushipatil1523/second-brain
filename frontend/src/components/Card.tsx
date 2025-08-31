import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}

export function Card({title, link, type}: CardProps) {
    return (
        <div className="group">
            <div className="p-6 bg-white rounded-xl border border-gray-200 max-w-96 min-h-64 min-w-96 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-gray-300 hover:-translate-y-1">
                <div className="flex justify-between items-start">
                    <div className="flex items-center text-sm font-medium text-gray-900">
                        <div className="text-gray-400 pr-3 flex-shrink-0">
                            <ShareIcon />
                        </div>
                        <span className="line-clamp-2 leading-relaxed">{title}</span>
                    </div>
                    <div className="flex items-center ml-3">
                        <a 
                            href={link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-white bg-gray-100 hover:bg-blue-600 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 border hover:border-blue-600"
                            aria-label="Visit link"
                        >
                            Visit
                        </a>
                    </div>
                </div>

                <div className="pt-6">
                    {type === "youtube" && (
                        <div className="relative overflow-hidden rounded-lg shadow-sm bg-black">
                            <iframe 
                                className="w-full h-56 object-cover" 
                                src={link.replace("watch", "embed").replace("?v=", "/")} 
                                title="YouTube video player" 
                                frameBorder="0" 
                                scrolling="no"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            />
                        </div>
                    )}

                    {type === "twitter" && (
                        <div className="bg-gray-50 rounded-lg p-4">
                            <blockquote className="twitter-tweet">
                                <a href={link.replace("x.com", "twitter.com")}></a> 
                            </blockquote>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}