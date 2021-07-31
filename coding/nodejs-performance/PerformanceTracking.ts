import { environment } from '../../environments/environment'
export function PerformanceTracking(): ClassDecorator {
  return function (constructor: any) {
    if (environment.production) {
      return
    }

    const component = constructor.name
    console.log(`Component: ${component}`)

    const original = constructor.prototype
    constructor.prototype = function (...args: any) {
      const start = performance.now()
      original.apply(this, args)
      const stop = performance.now()
      console.log(`${component} | ${(stop - start).toFixed(2)}`)
    }

    // console.log(`prototype: ${constructor.prototype['constructor']}`)

    // for (const key of Object.keys(constructor.prototype)) {
    //   console.log(key)
    // }

    const lifecycleHooks = [
      'ngOnInit',
      'ngDoCheck',
      'ngAfterViewChecked',
      'ngOnDestroy',
    ]

    lifecycleHooks.forEach((hook) => {
      const original = constructor.prototype[hook]
      //   console.log(`Orgiginal: ${original}`)

      constructor.prototype[hook] = function (...args: any) {
        console.log(`${component} | ${hook}`)
        if (hook === 'ngOnInit') {
          // start performance measurement of component
        } else if (hook === 'ngDoCheck') {
          // start measurement of checking cycle
        } else if (hook === 'ngAfterViewChecked') {
          // end measurement of checking cycle
        } else if (hook === 'ngOnDestroy') {
          // end performance measurement for component
        }

        // eslint-disable-next-line no-unused-expressions
        original && original.apply(this, args)
      }
    })
  }
}
