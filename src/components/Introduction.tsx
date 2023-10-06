/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          “Unlock the Art of Volunteering
        </p>
        <p className="mt-4">
          Our volunteering content, "Make a Difference Today," is a
          comprehensive resource designed to empower you to create positive
          change in your community.
        </p>
        <p className="mt-4">Discover the secrets of successful volunteering:</p>
        <p className="mt-4">
          Learn how to leverage your skills and passions Make a lasting impact
          on causes you care about
        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Learn how to leverage your skills and passions',
            'Learn how to leverage your skills and passions',
            'Learn how to leverage your skills and passions',
            'Learn how to leverage your skills and passions',
            'Learn how to leverage your skills and passions',
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          Find opportunities that align with your values Connect with
          like-minded volunteers
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Join us on a journey of inspiration and action. Unleash your
            potential to effect real change in the world.
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
