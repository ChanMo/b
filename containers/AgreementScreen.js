import React, {Component} from 'react'
import { View, Image, Text,ScrollView,StyleSheet} from 'react-native'

export default class AboutScreen extends Component {
  static navigationOptions = {
    title: '《币加服务协议》',
    headerStyle:{
        borderBottomWidth:0,
        shadowOpacity:0,
        elevation:0,
    }
  }
    constructor(props) {
        super(props)
        this.state = {
            text:`尊敬的用户：
币加 Bjapay Ltd（以下简称“BJA”或“我们”）尊重并保护用户（以下简称“您”或“用户”）的隐私，您使用币加时，BJA将按照本隐私政策（以下简称“本政策”）收集、使用您的个人信息。
BJA建议您在使用本产品之前仔细阅读并理解本政策全部内容, 针对免责声明等条款在内的重要信息将以加粗的形式体现。本政策有关关键词定义与BJA《币加服务协议》保持一致。
本政策可由BJA在线随时更新，更新后的政策一旦公布即代替原来的政策，如果您不接受修改后的条款，请立即停止使用币加，您继续使用币加将被视为接受修改后的政策。经修改的政策一经在币加上公布，立即自动生效。
您知悉本政策及其他有关规定适用于币加及币加上BJA所自主拥有的DApp。
一、 我们收集您的哪些信息
请您知悉，我们收集您的以下信息是出于满足您在币加服务需要的目的，且我们十分重视对您隐私的保护。在我们收集您的信息时，将严格遵守“合法、正当、必要”的原则。且您知悉，若您不提供我们服务所需的相关信息，您在币加的服务体验可能因此而受到影响。
我们将收集您的移动设备信息、操作记录、交易记录、钱包地址等个人信息。
为满足您的特定服务需求，我们将收集您的姓名、银行卡号、手机号码、邮件地址等信息。
您知悉：您在币加 上的钱包密码、私钥、助记词、Keystore并不存储或同步至BJA服务器。BJA不提供找回您的钱包密码、私钥、助记词、Keystore的服务。
除上述内容之外，您知悉在您使用币加特定功能时，我们将在收集您的个人信息前向您作出特别提示，要求向您收集更多的个人信息。如您选择不同意，则视为您放弃使用币加该特定功能。
当您跳转到第三方DApp后，第三方DApp会向您收集个人信息。币加不持有第三方DApp向您收集的个人信息。
在法律法规允许的范围内，BJA可能会在以下情形中收集并使用您的个人信息无需征得您的授权同意：
（1） 与国家安全、国防安全有关的；
（2） 与公共安全、公共卫生、重大公共利益有关的；
（3） 与犯罪侦查、起诉、审判和判决执行等有关的；
（4） 所收集的个人信息是您自行向社会公众公开的；
（5） 从合法公开披露的信息中收集您的个人信息，如合法的新闻报道，政府信息公开等渠道；
（6） 用于维护服务的安全和合规所必需的，例如发现、处理产品和服务的故障；
（7） 法律法规规定的其他情形。
我们收集信息的方式如下：
（1） 您向我们提供信息。例如，您在“个人中心”页面中填写姓名、手机号码或银行卡号，或在反馈问题时提供邮件地址，或在使用我们的特定服务时，您额外向我们提供。
（2） 我们在您使用币加的过程中获取信息，包括您移动设备信息以及您对币加的操作记录等信息；
（3） 我们通过区块链系统，拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。
二、 我们如何使用您的信息
我们通过您移动设备的唯一序列号，确认您与您的钱包的对应关系。
我们将向您及时发送重要通知，如软件更新、服务协议及本政策条款的变更。
我们在币加的“系统设置”中为您提供“指纹登录”选项，让您方便且更安全地管理您的数字代币。
我们通过收集您公开的钱包地址和提供的移动设备信息来处理您向我们提交的反馈。
我们收集您的个人信息进行BJA内部审计、数据分析和研究等，以期不断提升我们的服务水平。
依照《币加服务协议》及BJA其他有关规定，BJA将利用用户信息对用户的使用行为进行管理及处理。
法律法规规定及与监管机构配合的要求。
三、 您如何控制自己的信息您在币加中拥有以下对您个人信息自主控制权：
您可以通过同步钱包的方式，将您的其他钱包导入币加中，或者将您在币加的钱包导入到其他数字代币管理钱包中。币加将向您显示导入钱包的信息。
您知悉您可以通过“资产”版块内容修改您的数字代币种类、进行转账及收款等活动。
您知悉在币加“我”的版块您可以自由选择进行如下操作：
（1） 在“联系人”中，您可以随时查看并修改您的“联系人”；
（2） 在“系统设置”中，您可以选择不开启“指纹登录”选项，即您可以选择不使用苹果公司提供的Touch ID验证服务；
（3） 在“个人中心”中，您并不需要提供自己的姓名、手机号码、银行卡等信息，但当您使用特定服务时，您需要提供以上信息；
（4） 在“提交反馈”中，您可以随时向我们提出您对币加问题及改进建议，我们将非常乐意与您沟通并积极改进我们的服务。
您知悉当我们出于特定目的向您收集信息时，我们会提前给予您通知，您有权选择拒绝。但同时您知悉，当您选择拒绝提供有关信息时，即表示您放弃使用币加的有关服务。
您知悉，您及我们对于您交易记录是否公开并没有控制权，因为基于区块链交易系统的开源属性，您的交易记录在整个区块链系统中公开透明。
您知悉当您使用币加的功能跳转至第三方DApp之后，我们的《币加服务协议》、《币加隐私政策》将不再适用，针对您在第三方DApp上对您个人信息的控制权问题，我们建议您在使用第三方DApp之前详细阅读并了解其隐私规则和有关用户服务协议等内容。
您有权要求我们更新、更改、删除您的有关信息。
您知悉我们可以根据本政策第一条第6款的要求收集您的信息而无需获得您的授权同意。
四、 我们可能分享或传输您的信息
BJA在中华人民共和国境内收集和产生的用户个人信息将存储在中华人民共和国境内的服务器上。若BJA确需向境外传输您的个人信息，将在事前获得您的授权，且按照有关法律法规政策的要求进行跨境数据传输，并对您的个人信息履行保密义务。
未经您事先同意，BJA不会将您的个人信息向任何第三方共享或转让，但以下情况除外：
（1） 事先获得您明确的同意或授权；
（2） 所收集的个人信息是您自行向社会公众公开的；
（3） 所收集的个人信息系从合法公开披露的信息中收集，如合法的新闻报道，政府信息公开等渠道；
（4） 与BJA的关联方共享，我们只会共享必要的用户信息，且受本隐私条款中所声明的目的的约束；
（5） 根据适用的法律法规、法律程序的要求、行政机关或司法机关的要求进行提供；
（6） 在涉及合并、收购时，如涉及到个人信息转让，BJA将要求个人信息接收方继续接受本政策的约束。五、 我们如何保护您的信息
如BJA停止运营，BJA将及时停止继续收集您个人信息的活动，将停止运营的通知公告在币加上，并对所持有的您的个人信息在合理期限内进行删除或匿名化处理。
为了保护您的个人信息，BJA将采取数据安全技术措施，提升内部合规水平，增加内部员工信息安全培训，并对相关数据设置安全访问权限等方式安全保护您的隐私信息。
我们将在币加“消息中心”中向您发送有关信息安全的消息，并不时在币加“帮助中心”版块更新钱包使用及信息保护的资料，供您参考。
六、 对未成年人的保护我们对保护未满18周岁的未成年人做出如下特别约定：
未成年人应当在父母或监护人指导下使用BJA相关服务。
我们建议未成年人的父母和监护人应当在阅读本政策、《币加服务协议》及我们的其他有关规则的前提下，指导未成年人使用币加。
币加将根据国家相关法律法规的规定保护未成年人的个人信息的保密性及安全性。
七、 免责声明
请您注意，您通过币加接入第三方DApp后，将适用该第三方DApp发布的隐私政策。该第三方DApp对您个人信息的收集和使用不为BJA所控制，也不受本政策的约束。BJA无法保证第三方DApp一定会按照BJA的要求采取个人信息保护措施。
您应审慎选择和使用第三方DApp，并妥善保护好您的个人信息，BJA对其他第三方DApp的隐私保护不负任何责任。
BJA将在现有技术水平条件下尽可能采取合理的安全措施来保护您的个人信息，以避免信息的泄露、篡改或者毁损。BJA系利用无线方式传输数据，因此，BJA无法确保通过无线网络传输数据的隐私性和安全性。八、 其他
如您是中华人民共和国以外的用户，您需全面了解并遵守您所在司法辖区与使用BJA服务所有相关法律、法规及规则。
您在使用BJA服务过程中，如遇到任何有关个人信息使用的问题，您可以通过在币加提交反馈等方式联系我们。
您可以在币加中查看本政策及BJA其他服务规则。我们鼓励您在每次访问币加时都查阅BJA的服务协议及隐私政策。
本政策的任何译文版本仅为方便用户而提供，无意对本政策的条款进行修改。如果本政策的中文版本与非中文版本之间存在冲突，应以中文版本为准。
本政策自2019年1月23日起适用。本政策未尽事宜，您需遵守BJA不时更新的公告及相关规则。`
        }
    }

  render() {
    return (
      <ScrollView style={{flex:1,backgroundColor:'#f6f7fb',paddingHorizontal:15,paddingVertical:20}}>
        <Text style={styles.littitle}>最近更新于：2019年1月23日</Text>
        <Text style={{fontSize:15,paddingBottom:20}}>
            {this.state.text.split(' ').map((word) => word).join(' ')}
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    littitle:{
        fontSize:16,
        color:'#666666'
    }
})
