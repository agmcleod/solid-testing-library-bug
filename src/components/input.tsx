import { children } from 'solid-js'

export default function Input() {
  return (
    <div>
      <label for='my-input'>Label text</label>
      <input type='text' id='my-input' />
    </div>
  )
}
