'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
  privacy: boolean
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
  privacy?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    privacy: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio'
    else if (!validateEmail(formData.email)) newErrors.email = 'El email no es válido'
    if (!formData.subject.trim()) newErrors.subject = 'El asunto es obligatorio'
    if (!formData.message.trim()) newErrors.message = 'El mensaje es obligatorio'
    else if (formData.message.length < 20) newErrors.message = 'El mensaje debe tener al menos 20 caracteres'
    if (!formData.privacy) newErrors.privacy = 'Debes aceptar la política de privacidad'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      // Simulación de envío - reemplazar con API real
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold font-space text-gray-900 mb-4">¡Mensaje enviado!</h3>
        <p className="text-gray-600 mb-8">Gracias por contactar con nosotros. Te responderemos en menos de 24 horas.</p>
        <Button variant="outline" onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '', privacy: false }) }}>
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Nombre" name="name" placeholder="Tu nombre completo" value={formData.name} onChange={handleChange} error={errors.name} required />
        <Input label="Email" name="email" type="email" placeholder="tu@email.com" value={formData.email} onChange={handleChange} error={errors.email} required />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Teléfono" name="phone" type="tel" placeholder="+34 XXX XXX XXX" value={formData.phone} onChange={handleChange} />
        <Input label="Empresa" name="company" placeholder="Nombre de tu empresa" value={formData.company} onChange={handleChange} />
      </div>

      <Input label="Asunto" name="subject" placeholder="¿Sobre qué quieres consultarnos?" value={formData.subject} onChange={handleChange} error={errors.subject} required />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5 font-space">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Cuéntanos tu situación o consulta..."
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent min-h-[120px] resize-y ${errors.message ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'}`}
        />
        {errors.message && <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="privacy"
          name="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          He leído y acepto la <a href="/legal/privacidad" className="text-primary hover:underline">política de privacidad</a>. *
        </label>
      </div>
      {errors.privacy && <p className="text-sm text-red-600 -mt-4">{errors.privacy}</p>}

      <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        <Send className="w-5 h-5 ml-2" />
      </Button>
    </form>
  )
}
