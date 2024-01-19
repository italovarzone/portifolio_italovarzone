import { Button } from '@/app/components/button'
import { SectionTitle } from '@/app/components/section-title'
import { TechBadge } from '@/app/components/tech-badge'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import { Link } from '@/app/components/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export const ProjectDetails = () => {
  return (
    <section className="w-full sm:min-h-[750px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-06 overflow-hidden">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url(/images/pokeapi.png) no-repeat center/cover',
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="Pokedex API"
        className="text-center items-center sm:text-4xl"
      />

      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
        Este é um projeto simples de Pokédex realizada a partir do curso
        [Angular 2 (v15+) Typescript do Básico ao Avançado], que permite buscar
        informações sobre 100 Pokémon diferentes e exibir suas estatísticas. O
        projeto utiliza a PokéAPI para obter dados em tempo real sobre os
        Pokémon.
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="AngularJS" />
        <TechBadge name="Typescript" />
        <TechBadge name="SCSS" />
        <TechBadge name="HTML" />
        <TechBadge name="Angular Material" />
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a
          href="https://github.com/italovarzone/pokedex-angular"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="max-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>
        <a
          href="https://italovarzone.github.io/pokedex-angular/"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="max-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}