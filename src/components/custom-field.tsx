import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { SomeInput } from './some-input'

const formSchema = z.object({
  some: z.object({
    field: z.object({
      name: z.string().min(1),
    }),
  }),
})

type FormValues = z.infer<typeof formSchema>

export const CustomField = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      some: {
        field: {
          name: '',
        },
      },
    },
  })

  const handleSubmit = (formValues: FormValues) => {
    alert(JSON.stringify(formValues, null, 2))
  }

  return (
    <form className="m-16 space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
      <SomeInput
        someValue={form.watch('some.field.name')}
        onSomeValueChange={someValue =>
          form.setValue('some.field.name', someValue)
        }
      />

      <SomeInput
        someValue={form.watch('some.field.name')}
        onSomeValueChange={someValue =>
          form.setValue('some.field.name', someValue, {
            shouldValidate: true,
          })
        }
      />

      <Controller
        control={form.control}
        name="some.field.name"
        render={({ field }) => (
          <SomeInput
            someValue={field.value}
            onSomeValueChange={someValue =>
              field.onChange({
                target: {
                  value: someValue,
                },
              })
            }
          />
        )}
      />

      <Button type="submit" disabled={!form.formState.isValid}>
        Send
      </Button>
    </form>
  )
}
