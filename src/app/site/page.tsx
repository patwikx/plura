import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'

import clsx from 'clsx'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const prices = () => ({
   
  })

  return (
    <>
      <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col ">
        {/* grid */}

        <div />

        <p className="text-center"></p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
          <h1 className="text-9xl font-bold text-center md:text-[0px]">
      
          </h1>
        </div>
        <div className="flex justify-center items-center relative md:mt-[-70px]">
          <Image
            src={'/assets/RDRDC-WHITE-LOGO.png'}
            alt="banner image"
            height={1200}
            width={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
          />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>

      {/* 
<section className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
    <h2 className="text-4xl text-center"> Choose what fits you right</h2>
    <p className="text-muted-foreground text-center">
        Our straightforward pricing plans are tailored to meet your needs. If
        {" you're"} not <br />
        ready to commit you can get started for free.
    </p>
    <div className="flex  justify-center gap-4 flex-wrap mt-6">
        <Card className={clsx('w-[300px] flex flex-col justify-between')}>
            <CardHeader>
                <CardTitle
                    className={clsx({
                        'text-muted-foreground': true,
                    })}
                >
                    {pricingCards[0].title}
                </CardTitle>
                <CardDescription>{pricingCards[0].description}</CardDescription>
            </CardHeader>
            <CardContent>
                <span className="text-4xl font-bold">$0</span>
                <span>/ month</span>
            </CardContent>
            <CardFooter className="flex flex-col  items-start gap-4 ">
                <div>
                    {pricingCards
                        .find((c) => c.title === 'Starter')
                        ?.features.map((feature) => (
                            <div
                                key={feature}
                                className="flex gap-2"
                            >
                                <Check />
                                <p>{feature}</p>
                            </div>
                        ))}
                </div>
                <Link
                    href="/agency"
                    className={clsx(
                        'w-full text-center bg-primary p-2 rounded-md',
                        {
                            '!bg-muted-foreground': true,
                        }
                    )}
                >
                    Get Started
                </Link>
            </CardFooter>
        </Card>
    </div>
</section>
*/}

      
    </>
  )
}
