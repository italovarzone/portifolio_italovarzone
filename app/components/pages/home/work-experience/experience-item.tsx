import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'

export const ExperienceItem = () => {
    return (
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className='rounded-full border border-gray-500 p-0.5'>
                    <Image
                        width={40}
                        height={40}
                        src="/images/vimansistemas_logo.jpg"
                        className="rounded-full"
                        alt="Logo da Empresa VIMAN Sistemas"
                    />
                </div>

                <div className='h-full w-[1px] bg-gray-800'/>
            </div>

            <div>
                <div className='flex flex-col gap-2 text-sm sm:text-base'>
                    <a href="https://www.linkedin.com/company/vimansistemas/mycompany/" target="_blank" className='text-gray-500 hover:text-emerald-500 transition-colors'>
                        @ VIMAN Sistemas
                    </a>
                    <h4 className='text-gray-300'>
                        Desenvolvedor Full Stack
                    </h4>
                    <span className='text-gray-500'>
                        nov 2023 • O momento • (4 meses)
                    </span>
                    <p className='text-gray-400'>
                        Desenvolvimento de projetos web, gerenciamento e manutenção de componentes, correções de bugs e criação/inovação de novos projetos.
                    </p>
                </div>

                <p className='text-gray-400 text-sm mb-3 mt-6 font-semibold'>Competências</p>
                <div className='flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8'>
                    <TechBadge name="AngularJS"/>
                    <TechBadge name="AngularJS"/>
                    <TechBadge name="AngularJS"/>
                    <TechBadge name="AngularJS"/>
                </div>
            </div>
        </div>
    )    
}
