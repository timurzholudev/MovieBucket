import { trigger, transition, style, animate, stagger, query, keyframes } from '@angular/animations';

export const slideInAnimation = trigger(
    'slideIn',
    [
        transition(
            ':enter',
            [
                style({
                    'transform': 'translateY(-40px)',
                    opacity: 1
                }),
                animate(
                    '0.2s ease-in',
                    style({
                        'transform': 'translateY(0)',
                        opacity: 1
                    }),
                )
            ]
        )
    ]
)