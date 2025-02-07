import { Input } from './ui/input'

export const SomeInput = (props: {
  someValue: string
  onSomeValueChange: (value: string) => void
}) => {
  return (
    <Input
      value={props.someValue}
      onChange={e => props.onSomeValueChange(e.target.value)}
    />
  )
}
