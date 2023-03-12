import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button/Button'

describe('buttons', () => {
    test('checking for text', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})
