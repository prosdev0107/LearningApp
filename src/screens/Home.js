import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import themeStyles from '../utils/theme.styles';
import {FlatList} from 'react-native-gesture-handler';
import {images} from '../../assets';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeStyles.COLOR.screenBG,
  },
  greetingContainer: {
    marginVertical: 50,
    marginHorizontal: 50,
  },
  greetingLabel: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Lato-Bold',
  },
  greetingDetail: {
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    color: themeStyles.COLOR.secondaryTextColor,
    textAlign: 'center',
    lineHeight: 26,
  },
  searchBarContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 14,

    shadowColor: themeStyles.COLOR.primaryColor,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10.65,

    elevation: 8,
  },
  searchInput: {
    flex: 1,
    height: 30,
    marginVertical: 20,
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    color: themeStyles.COLOR.primaryTextColor,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderTopLeftRadius: 14,
    borderBottomLeftRadius: 14,
  },
  searchBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  searchIconWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themeStyles.COLOR.primaryColor,
    borderRadius: 10,

    shadowColor: themeStyles.COLOR.primaryColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  topicSlideContainer: {
    marginTop: 70,
  },
  topicSlideGroupLabel: {
    color: themeStyles.COLOR.primaryTextColor,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    paddingBottom: 20,
    marginHorizontal: 30,
  },
  topicSlideItemContainer: {
    height: 290,
    width: 260,
    backgroundColor: 'white',
    marginRight: 16,
    borderRadius: 16,
    shadowColor: themeStyles.COLOR.primaryColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10.65,
    elevation: 8,
  },
  topicSlideItemImg: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  topicSlideItemContentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  topicSlideItemTopicGroup: {
    fontFamily: 'Lato-Bold',
    fontSize: 13,
    color: themeStyles.COLOR.topicLabelTextColor,
  },
  topicSlideItemTopicLabel: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    color: themeStyles.COLOR.primaryTextColor,
    lineHeight: 28,
  },
  topicSlideItemQuantityText: {
    fontFamily: 'Lato-Regular',
    fontSize: 14,
    color: themeStyles.COLOR.topicLabelQuantityTextColor,
  },
});

const Greetings = () => (
  <View style={styles.greetingContainer}>
    <Text style={styles.greetingLabel}>Hi, Antonio</Text>
    <Text style={styles.greetingDetail}>
      What would you like to learn today? Search below.
    </Text>
  </View>
);

const SearchBar = () => (
  <View style={styles.searchBarContainer}>
    <TextInput
      style={styles.searchInput}
      selectionColor={themeStyles.COLOR.primaryColor}
      value="World H"
      autoFocus
    />
    <TouchableOpacity style={styles.searchBtn}>
      <View style={styles.searchIconWrapper}>
        <Icon name="ios-search" color="white" size={28} />
      </View>
    </TouchableOpacity>
  </View>
);
const mockupTopicData = [
  {
    key: '1',
    imgSrc: images.biology,
    topicGroup: 'Biology Basics',
    topicLabel: 'Biology & The \n Scientific Method',
    quantityText: '4 of 8 lessons',
  },
];

const listFooterData = {
  key: '2',
  imgSrc: images.cosmos,
  topicGroup: 'Cosmos',
  topicLabel: 'Earth Revolution & Climate Changes',
  quantityText: '4 of 8 lessons',
};

const StudyingTopics = () => (
  <View style={styles.topicSlideContainer}>
    <Text style={styles.topicSlideGroupLabel}>STUDYING</Text>
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}
      data={mockupTopicData}
      key={({item}) => item.key}
      ListHeaderComponent={<View style={{paddingLeft: 30}} />}
      ListFooterComponent={
        <View style={styles.topicSlideItemContainer}>
          <Image
            source={listFooterData.imgSrc}
            style={[styles.topicSlideItemImg, {width: 80}]}
          />
          <View style={styles.topicSlideItemContentContainer}>
            <Text style={styles.topicSlideItemTopicGroup}>
              {listFooterData.topicGroup}
            </Text>
            <Text style={styles.topicSlideItemTopicLabel}>
              {listFooterData.topicLabel}
            </Text>
            <Text style={styles.topicSlideItemQuantityText}>
              {listFooterData.quantityText}
            </Text>
          </View>
        </View>
      }
      renderItem={({item}) => (
        <View style={styles.topicSlideItemContainer}>
          <Image source={item.imgSrc} style={styles.topicSlideItemImg} />
          <View style={styles.topicSlideItemContentContainer}>
            <Text style={styles.topicSlideItemTopicGroup}>
              {item.topicGroup}
            </Text>
            <Text style={styles.topicSlideItemTopicLabel}>
              {item.topicLabel}
            </Text>
            <Text style={styles.topicSlideItemQuantityText}>
              {item.quantityText}
            </Text>
          </View>
        </View>
      )}
    />
  </View>
);

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Greetings />
          <SearchBar />
          <StudyingTopics />
        </View>
      </SafeAreaView>
    );
  }
}
