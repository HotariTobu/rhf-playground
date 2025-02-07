import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'

const formSchema = z.object({
  name: z.string(),
})

type FormValues = {
  age: number
} & z.infer<typeof formSchema>

export const ComplexSchema = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 0,
      name: '',
    },
  })

  const handleSubmit = (formValues: FormValues) => {
    alert(JSON.stringify(formValues, null, 2))
  }

  return (
    <form className="m-16 space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
      <input {...form.register('age')} />
      <input {...form.register('name')} />
      <Button type="submit" disabled={!form.formState.isValid}>
        Send
      </Button>
    </form>
  )
}
