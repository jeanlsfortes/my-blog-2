"use client";

import { useParams } from "next/navigation";
import { dictionaries } from "./dictionary/dictionaries";
import { useMemo } from "react";
import Image from "next/image";

interface PhotoAlbumProps {
    urlFoto: string;
    email: string;
    localizacao: string;
}

export default function PhotoAlbum({ urlFoto, email, localizacao }: PhotoAlbumProps): React.ReactElement {
    const params = useParams()
    const locale = (params.lang ?? 'pt-BR')

    const { PhotoAlbum } = useMemo(() => {
        return dictionaries[locale as keyof typeof dictionaries] || dictionaries["pt-BR"];
    }, [locale]);

    return (
        <div className="relative">
            <div className="bg-gray-300 rounded-lg overflow-hidden">
                <Image
                    src={urlFoto}
                    alt="Developer"
                    className="w-full h-full object-cover"
                    width={400}
                    height={600}
                    priority={true}
                    quality={85}
                />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="space-y-1">
                    <p className="font-medium">{PhotoAlbum.Email}</p>
                    <p className="text-gray-600">{email}</p>
                </div>

                <div className="h-px bg-gray-200 my-4"></div>

                <div className="space-y-1">
                    <p className="font-medium">{PhotoAlbum.location}</p>
                    <p className="text-gray-600">{localizacao}</p>
                </div>
            </div>
        </div>
    )
}