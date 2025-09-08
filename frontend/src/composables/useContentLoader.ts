import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const contentCache = new Map<string, any>()

export function useContentLoader<T = any>(file: string) {
  const { locale } = useI18n()
  const content = ref<T | null>(null)

  const load = async () => {
    const base = import.meta.env.BASE_URL
    const cacheKey = `${locale.value}/${file}`

    try {
      // if content is in cache, load content from cache
      if (contentCache.has(cacheKey)) {
        content.value = contentCache.get(cacheKey)
        return
      }

      const response = await fetch(
        `${base}content/${locale.value}/${file}.json`
      )
      if (!response.ok) {
        throw new Error(
          `Impossible de charger ${file}.json pour la locale ${locale.value}`
        )
      }

      const data = await response.json()
      content.value = data
      contentCache.set(cacheKey, data)
    } catch (err) {
      console.error(err)
      content.value = null
    }
  }

  onMounted(load)
  watch(locale, load)

  return { content, reload: load }
}
