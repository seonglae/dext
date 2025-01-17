import LazyLoad from 'react-lazyload'
import { StorybookIcon } from 'components/Icons'

const Storybook = ({ id, lib }) => (
  <LazyLoad height={400} once>
    <div className="flex justify-between items-center">
      <h3 className="text-xl mb-4 tracking-tight mt-6 heading">Example</h3>
      <div className="mb-2">
        <a
          className="flex mt-3 items-center opacity-60 text-xs text-gray-700"
          target="_blank"
          rel="nofollow noopener noreferrer"
          href={`https://${lib}.vercel.app/?path=/story/${id}`}
        >
          <StorybookIcon className="mr-1" /> Open in Storybook
        </a>
      </div>
    </div>
    <iframe
      className="my-6 w-full h-[400px]"
      src={`https://${lib}.pmnd.rs/iframe.html?id=${id}&viewMode=story`}
    />
  </LazyLoad>
)

export default Storybook
