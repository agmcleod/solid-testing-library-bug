import { it, describe, expect } from 'vitest'
import { render, fireEvent, waitFor } from '@solidjs/testing-library'

import Input from './input'

describe('Input', () => {
  // try commenting out this example
  it('updates the input', async () => {
    const { findByLabelText } = render(() => <Input />)

    const el = await findByLabelText(/label text/i)

    fireEvent.change(el, {
      target: {
        value: 'new input',
      },
    })
  })

  it('updates the input again', async () => {
    const { findByLabelText } = render(() => <Input />)

    const el = await findByLabelText(/label text/i)

    fireEvent.change(el, {
      target: {
        value: 'new input again',
      },
    })
  })
})
