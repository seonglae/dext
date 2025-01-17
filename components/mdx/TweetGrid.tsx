import { Tweet } from 'react-twitter-widgets'

const w = 400
export const TweetGrid = () => {
  return (
    <div
      className="grid w-full gap-4"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gridAutoRows: 'minmax(200px, auto)',
      }}
    >
      <Tweet tweetId="1006931395003015170" options={{ width: w }} />
      <Tweet
        tweetId="1033962041298509824"
        options={{ conversation: 'none', cards: 'hidden', width: w }}
      />
      <Tweet tweetId="1007560091430801409" options={{ conversation: 'none', width: w }} />
      <Tweet tweetId="1033964001246543872" options={{ conversation: 'none', width: w }} />
      <Tweet tweetId="1030826919124590597" options={{ conversation: 'none', width: w }} />
      <Tweet
        tweetId="1032284123161931778"
        options={{ conversation: 'none', width: w, cards: 'hidden' }}
      />
      <Tweet tweetId="983054609353707520" options={{ conversation: 'none', width: w }} />
      <Tweet tweetId="1087456685080358918" options={{ conversation: 'none', width: w }} />
    </div>
  )
}
