import { trigger, transition, style, animate } from '@angular/animations';

export const slideToggleAnimation = trigger(
    'slideToggle',
    [
        transition(
            ':enter',
            [
                style({ 'height': 0, opacity: 0 }),
                animate('0.2s ease-in-out',
                    style({ 'height': '*', opacity: 1 }))
            ]
        ),
        transition(
            ':leave',
            [
                style({ 'height': '*', opacity: 1 }),
                animate('0.3s ease-in',
                    style({ 'height': 0, opacity: 0 }))
            ]
        )
    ]
)