import { environment } from '../../environments/environment'
export function FunctionPerformanceTracking() {
  return function (target, name, descriptor) {
    if (environment.production) {
      return
    }

    // console.log(target)
    // console.log(name)
    console.log(descriptor)
    const orig = descriptor.value
    console.log(orig)
    descriptor.value = function (...args) {
      const start = performance.now()
      orig.apply(this, args)
      const stop = performance.now()
      console.log(`${name} | ${(stop - start).toFixed(2)}`)
    }
  }
}
