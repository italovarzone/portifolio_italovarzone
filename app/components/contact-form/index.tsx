'use client'

import { Button } from '../button'
import { SectionTitle } from '../section-title'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch {
      toast.error(
        'Ocorreu um erro ao enviar a mensagem... Tente novamente mais tarde.',
      )
    }
  }
  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="container w-full max-w-[420] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form
          className="mt-12 w-full flex flex-col gap-4 items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-[420px] h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4"
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-[420px] h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className=" resize-none w-[420px] h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4"
            maxLength={500}
            {...register('message')}
          />

          <Button
            className="w-max mx-auto mt-6 shadow-button"
            disabled={isSubmitting}
          >
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
